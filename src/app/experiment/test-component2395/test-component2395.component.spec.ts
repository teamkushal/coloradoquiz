import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2395Component } from './test-component2395.component';

describe('TestComponent2395Component', () => {
  let component: TestComponent2395Component;
  let fixture: ComponentFixture<TestComponent2395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2395Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
