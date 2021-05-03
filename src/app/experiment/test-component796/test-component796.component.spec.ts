import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent796Component } from './test-component796.component';

describe('TestComponent796Component', () => {
  let component: TestComponent796Component;
  let fixture: ComponentFixture<TestComponent796Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent796Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
