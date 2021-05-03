import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent679Component } from './test-component679.component';

describe('TestComponent679Component', () => {
  let component: TestComponent679Component;
  let fixture: ComponentFixture<TestComponent679Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent679Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
