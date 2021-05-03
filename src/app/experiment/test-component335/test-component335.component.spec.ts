import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent335Component } from './test-component335.component';

describe('TestComponent335Component', () => {
  let component: TestComponent335Component;
  let fixture: ComponentFixture<TestComponent335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent335Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
