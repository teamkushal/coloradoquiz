import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2586Component } from './test-component2586.component';

describe('TestComponent2586Component', () => {
  let component: TestComponent2586Component;
  let fixture: ComponentFixture<TestComponent2586Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2586Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
