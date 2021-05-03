import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2305Component } from './test-component2305.component';

describe('TestComponent2305Component', () => {
  let component: TestComponent2305Component;
  let fixture: ComponentFixture<TestComponent2305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2305Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
