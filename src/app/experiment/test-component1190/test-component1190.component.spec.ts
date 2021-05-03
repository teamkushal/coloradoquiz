import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1190Component } from './test-component1190.component';

describe('TestComponent1190Component', () => {
  let component: TestComponent1190Component;
  let fixture: ComponentFixture<TestComponent1190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
