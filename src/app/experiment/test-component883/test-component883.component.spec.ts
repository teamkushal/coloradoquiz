import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent883Component } from './test-component883.component';

describe('TestComponent883Component', () => {
  let component: TestComponent883Component;
  let fixture: ComponentFixture<TestComponent883Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent883Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
