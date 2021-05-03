import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent241Component } from './test-component241.component';

describe('TestComponent241Component', () => {
  let component: TestComponent241Component;
  let fixture: ComponentFixture<TestComponent241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
