import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent788Component } from './test-component788.component';

describe('TestComponent788Component', () => {
  let component: TestComponent788Component;
  let fixture: ComponentFixture<TestComponent788Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent788Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
