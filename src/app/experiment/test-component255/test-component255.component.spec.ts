import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent255Component } from './test-component255.component';

describe('TestComponent255Component', () => {
  let component: TestComponent255Component;
  let fixture: ComponentFixture<TestComponent255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
