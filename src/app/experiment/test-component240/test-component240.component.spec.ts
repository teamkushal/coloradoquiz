import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent240Component } from './test-component240.component';

describe('TestComponent240Component', () => {
  let component: TestComponent240Component;
  let fixture: ComponentFixture<TestComponent240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
