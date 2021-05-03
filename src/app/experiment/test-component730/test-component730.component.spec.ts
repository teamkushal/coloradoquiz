import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent730Component } from './test-component730.component';

describe('TestComponent730Component', () => {
  let component: TestComponent730Component;
  let fixture: ComponentFixture<TestComponent730Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent730Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
