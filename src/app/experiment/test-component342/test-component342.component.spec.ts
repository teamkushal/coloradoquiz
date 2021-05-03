import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent342Component } from './test-component342.component';

describe('TestComponent342Component', () => {
  let component: TestComponent342Component;
  let fixture: ComponentFixture<TestComponent342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent342Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
