import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent961Component } from './test-component961.component';

describe('TestComponent961Component', () => {
  let component: TestComponent961Component;
  let fixture: ComponentFixture<TestComponent961Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent961Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
