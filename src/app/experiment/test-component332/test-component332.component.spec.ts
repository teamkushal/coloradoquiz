import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent332Component } from './test-component332.component';

describe('TestComponent332Component', () => {
  let component: TestComponent332Component;
  let fixture: ComponentFixture<TestComponent332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
