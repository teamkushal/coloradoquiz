import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent464Component } from './test-component464.component';

describe('TestComponent464Component', () => {
  let component: TestComponent464Component;
  let fixture: ComponentFixture<TestComponent464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent464Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
