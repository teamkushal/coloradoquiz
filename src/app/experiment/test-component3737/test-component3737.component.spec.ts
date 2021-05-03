import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3737Component } from './test-component3737.component';

describe('TestComponent3737Component', () => {
  let component: TestComponent3737Component;
  let fixture: ComponentFixture<TestComponent3737Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3737Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
