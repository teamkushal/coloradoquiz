import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3219Component } from './test-component3219.component';

describe('TestComponent3219Component', () => {
  let component: TestComponent3219Component;
  let fixture: ComponentFixture<TestComponent3219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
