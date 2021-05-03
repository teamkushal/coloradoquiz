import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent717Component } from './test-component717.component';

describe('TestComponent717Component', () => {
  let component: TestComponent717Component;
  let fixture: ComponentFixture<TestComponent717Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent717Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
