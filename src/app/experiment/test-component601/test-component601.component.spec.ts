import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent601Component } from './test-component601.component';

describe('TestComponent601Component', () => {
  let component: TestComponent601Component;
  let fixture: ComponentFixture<TestComponent601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent601Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
