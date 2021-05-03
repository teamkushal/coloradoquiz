import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1000Component } from './test-component1000.component';

describe('TestComponent1000Component', () => {
  let component: TestComponent1000Component;
  let fixture: ComponentFixture<TestComponent1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
