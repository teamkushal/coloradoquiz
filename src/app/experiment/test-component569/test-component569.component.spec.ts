import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent569Component } from './test-component569.component';

describe('TestComponent569Component', () => {
  let component: TestComponent569Component;
  let fixture: ComponentFixture<TestComponent569Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent569Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
