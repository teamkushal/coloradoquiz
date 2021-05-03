import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent287Component } from './test-component287.component';

describe('TestComponent287Component', () => {
  let component: TestComponent287Component;
  let fixture: ComponentFixture<TestComponent287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent287Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
