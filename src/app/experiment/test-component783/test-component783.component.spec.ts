import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent783Component } from './test-component783.component';

describe('TestComponent783Component', () => {
  let component: TestComponent783Component;
  let fixture: ComponentFixture<TestComponent783Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent783Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
