import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2616Component } from './test-component2616.component';

describe('TestComponent2616Component', () => {
  let component: TestComponent2616Component;
  let fixture: ComponentFixture<TestComponent2616Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2616Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
