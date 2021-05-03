import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent225Component } from './test-component225.component';

describe('TestComponent225Component', () => {
  let component: TestComponent225Component;
  let fixture: ComponentFixture<TestComponent225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
