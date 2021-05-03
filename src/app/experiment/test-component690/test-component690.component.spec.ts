import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent690Component } from './test-component690.component';

describe('TestComponent690Component', () => {
  let component: TestComponent690Component;
  let fixture: ComponentFixture<TestComponent690Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent690Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
