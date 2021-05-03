import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3316Component } from './test-component3316.component';

describe('TestComponent3316Component', () => {
  let component: TestComponent3316Component;
  let fixture: ComponentFixture<TestComponent3316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3316Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
