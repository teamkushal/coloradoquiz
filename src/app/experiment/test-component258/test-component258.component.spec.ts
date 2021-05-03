import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent258Component } from './test-component258.component';

describe('TestComponent258Component', () => {
  let component: TestComponent258Component;
  let fixture: ComponentFixture<TestComponent258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
