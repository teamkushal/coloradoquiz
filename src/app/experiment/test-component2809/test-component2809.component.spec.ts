import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2809Component } from './test-component2809.component';

describe('TestComponent2809Component', () => {
  let component: TestComponent2809Component;
  let fixture: ComponentFixture<TestComponent2809Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2809Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
