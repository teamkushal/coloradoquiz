import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent101Component } from './test-component101.component';

describe('TestComponent101Component', () => {
  let component: TestComponent101Component;
  let fixture: ComponentFixture<TestComponent101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
