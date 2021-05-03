import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2511Component } from './test-component2511.component';

describe('TestComponent2511Component', () => {
  let component: TestComponent2511Component;
  let fixture: ComponentFixture<TestComponent2511Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2511Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
