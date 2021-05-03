import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent97Component } from './test-component97.component';

describe('TestComponent97Component', () => {
  let component: TestComponent97Component;
  let fixture: ComponentFixture<TestComponent97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
