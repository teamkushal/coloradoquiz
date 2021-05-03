import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3006Component } from './test-component3006.component';

describe('TestComponent3006Component', () => {
  let component: TestComponent3006Component;
  let fixture: ComponentFixture<TestComponent3006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
