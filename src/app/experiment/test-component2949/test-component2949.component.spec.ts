import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2949Component } from './test-component2949.component';

describe('TestComponent2949Component', () => {
  let component: TestComponent2949Component;
  let fixture: ComponentFixture<TestComponent2949Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2949Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
