import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent786Component } from './test-component786.component';

describe('TestComponent786Component', () => {
  let component: TestComponent786Component;
  let fixture: ComponentFixture<TestComponent786Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent786Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
