import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2397Component } from './test-component2397.component';

describe('TestComponent2397Component', () => {
  let component: TestComponent2397Component;
  let fixture: ComponentFixture<TestComponent2397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2397Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
