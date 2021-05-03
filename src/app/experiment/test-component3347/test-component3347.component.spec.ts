import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3347Component } from './test-component3347.component';

describe('TestComponent3347Component', () => {
  let component: TestComponent3347Component;
  let fixture: ComponentFixture<TestComponent3347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3347Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
