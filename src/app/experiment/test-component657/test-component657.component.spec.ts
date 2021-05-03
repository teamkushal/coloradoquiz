import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent657Component } from './test-component657.component';

describe('TestComponent657Component', () => {
  let component: TestComponent657Component;
  let fixture: ComponentFixture<TestComponent657Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent657Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
