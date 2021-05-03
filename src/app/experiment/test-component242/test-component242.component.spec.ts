import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent242Component } from './test-component242.component';

describe('TestComponent242Component', () => {
  let component: TestComponent242Component;
  let fixture: ComponentFixture<TestComponent242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
