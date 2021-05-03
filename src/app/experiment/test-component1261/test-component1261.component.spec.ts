import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1261Component } from './test-component1261.component';

describe('TestComponent1261Component', () => {
  let component: TestComponent1261Component;
  let fixture: ComponentFixture<TestComponent1261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
