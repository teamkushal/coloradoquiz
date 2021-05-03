import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent929Component } from './test-component929.component';

describe('TestComponent929Component', () => {
  let component: TestComponent929Component;
  let fixture: ComponentFixture<TestComponent929Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent929Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
