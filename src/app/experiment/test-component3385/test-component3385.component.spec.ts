import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3385Component } from './test-component3385.component';

describe('TestComponent3385Component', () => {
  let component: TestComponent3385Component;
  let fixture: ComponentFixture<TestComponent3385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3385Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
