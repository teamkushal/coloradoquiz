import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent944Component } from './test-component944.component';

describe('TestComponent944Component', () => {
  let component: TestComponent944Component;
  let fixture: ComponentFixture<TestComponent944Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent944Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
