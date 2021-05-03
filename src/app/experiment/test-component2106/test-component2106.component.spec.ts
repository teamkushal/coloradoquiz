import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2106Component } from './test-component2106.component';

describe('TestComponent2106Component', () => {
  let component: TestComponent2106Component;
  let fixture: ComponentFixture<TestComponent2106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
