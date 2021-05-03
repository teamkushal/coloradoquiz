import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent560Component } from './test-component560.component';

describe('TestComponent560Component', () => {
  let component: TestComponent560Component;
  let fixture: ComponentFixture<TestComponent560Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent560Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
