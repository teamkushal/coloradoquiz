import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2560Component } from './test-component2560.component';

describe('TestComponent2560Component', () => {
  let component: TestComponent2560Component;
  let fixture: ComponentFixture<TestComponent2560Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2560Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
