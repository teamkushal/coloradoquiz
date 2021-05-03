import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3869Component } from './test-component3869.component';

describe('TestComponent3869Component', () => {
  let component: TestComponent3869Component;
  let fixture: ComponentFixture<TestComponent3869Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3869Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
