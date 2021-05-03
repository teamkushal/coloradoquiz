import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent85Component } from './test-component85.component';

describe('TestComponent85Component', () => {
  let component: TestComponent85Component;
  let fixture: ComponentFixture<TestComponent85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
