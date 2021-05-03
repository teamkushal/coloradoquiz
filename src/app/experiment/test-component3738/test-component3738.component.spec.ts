import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3738Component } from './test-component3738.component';

describe('TestComponent3738Component', () => {
  let component: TestComponent3738Component;
  let fixture: ComponentFixture<TestComponent3738Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3738Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
