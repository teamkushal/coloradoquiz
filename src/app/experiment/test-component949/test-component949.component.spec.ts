import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent949Component } from './test-component949.component';

describe('TestComponent949Component', () => {
  let component: TestComponent949Component;
  let fixture: ComponentFixture<TestComponent949Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent949Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
