import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2488Component } from './test-component2488.component';

describe('TestComponent2488Component', () => {
  let component: TestComponent2488Component;
  let fixture: ComponentFixture<TestComponent2488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2488Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
