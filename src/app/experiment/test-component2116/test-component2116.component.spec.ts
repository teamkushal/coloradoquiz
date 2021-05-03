import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2116Component } from './test-component2116.component';

describe('TestComponent2116Component', () => {
  let component: TestComponent2116Component;
  let fixture: ComponentFixture<TestComponent2116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
